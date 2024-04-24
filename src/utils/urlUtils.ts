export const appendQueryStringToUrl = (
    url: string,
    params: any
): string => {
    let urlInstance: URL;

    try {
        urlInstance = new URL(url);
    } catch (err) {
        return '';
    }

    for (const key in params) {
        const value = params[key];
        if (value !== null && value !== undefined) {
            if (Array.isArray(value)) {
                value.forEach(item =>
                    urlInstance.searchParams.append(key, item)
                );
            } else {
                urlInstance.searchParams.set(key, `${value}`);
            }
        }
    }

    return urlInstance.toString();
};