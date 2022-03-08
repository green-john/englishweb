export function postForm(url, data) {
    console.log('data', data);

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(data).toString()
    })
}
