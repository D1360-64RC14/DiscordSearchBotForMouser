export function sleep(ms: number) {
    return new Promise((ok) => setTimeout(ok, ms));
}
