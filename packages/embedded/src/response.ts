export function cancelBody(response: Response): void {
  response.body?.cancel().catch(() => {
    // ignore failure to cancel
  });
}
