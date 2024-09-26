export default (): any =>
  ({
    WEBHOOK_HOST: process.env.WEBHOOK_HOST,
    BOT_TOKEN: process.env.BOT_TOKEN,
    API_PREFIX: '/api',
    API_VERSION: '/v1',
    HTTP_PORT: Number(process.env.HTTP_PORT),
    LOG_LEVEL: process.env.LOG_LEVEL,
  }) as const;
