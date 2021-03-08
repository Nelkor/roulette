import { IncomingMessage, ServerResponse } from 'http'

export const onHttpRequest = async (
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> => {
  res.end()
}
