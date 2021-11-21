import env from "../env";

export default {
    type: "postgres",
    host: env.dbHost,
    port: Number(env.dbPort),
    username: env.dbUsername,
    password: env.dbPassword,
    database: env.dbName,
    synchronize: false,
    entities: ['dist/api/models/*{.ts,.js}'],    
    migrations: ['dist/api/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/api/migrations',
    }    
}
