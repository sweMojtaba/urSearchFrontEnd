export default function fakePostFile(file: File): Promise<Response> {
    const response = new Response(JSON.stringify({}));
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(response);
        }, 1000);
    });
}