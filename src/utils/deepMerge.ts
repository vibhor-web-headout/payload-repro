/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: unknown): boolean {
    return <boolean>item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Creating a common object type to disable "any" error. In our case, the object value can be "any"
 */
type TObject = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
};

/**
 * Deep merge two objects.
 * @param target
 * @param source
 */
export default function deepMerge<T extends TObject, S extends TObject>(
    target: T,
    source: S
): T {
    const output: TObject = { ...target };

    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                } else {
                    output[key] = deepMerge(target[key], source[key]);
                }
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }

    return output as T;
}
