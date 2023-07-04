export default function fakeResponse(): Promise<Response> {
    const response = new Response(JSON.stringify({}));
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(response);
        }, 1000);
    });
}