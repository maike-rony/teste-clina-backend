import { DatabaseType } from "typeorm";

export default {
  jwtSecret: process.env.JWT_SECRET || 'jx96JPZg67OFB8lRfmLG7CUrgiwAVf6M91kjzUm2IN1i9FdzvE5e45uwgz60xjH',
  jwtTimeExpired: process.env.JWT_TIME_EXPIRED || 60000,
  port: process.env.PORT || 5000,
  nivel: Number(process.env.NIVEL) || Number(2),
  sistema: process.env.SISTEMA || String('api'),
  dbType: process.env.DB_TYPE as DatabaseType || 'postgres',
  dbHost: process.env.DB_HOST || String('localhost'),
  dbPort: process.env.DB_PORT || Number('5432'),
  dbUsername: process.env.DB_USERNAME || String('postgres'),
  dbPassword: process.env.DB_PASSWORD || String('postgres'),
  dbName: process.env.DB_NAME || String('clina'),
  synchronize: process.env.SYNCHRONIZE || Boolean(false),
  migrationsRun: process.env.MIGRATIONS_RUN || Boolean(false)
}