import type {
  Interceptor,
  StreamRequest,
  StreamResponse,
  UnaryRequest,
  UnaryResponse,
} from "@connectrpc/connect";

export type Request = UnaryRequest | StreamRequest;
export type Response = UnaryResponse | StreamResponse;
export type Handler = (request: Request) => Promise<Response>;

export function createInterceptor(
  interceptor: (request: Request, next: Handler) => Promise<Response>,
): Interceptor {
  return (next) => async (request) => await interceptor(request, next);
}
