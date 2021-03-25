import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'
import { getConnection } from 'typeorm'
import * as helmet from 'helmet'
import { PORT } from '@environments'
import { MyLogger } from '@config'
declare const module: any

async function bootstrap() {
	try {
		const app = await NestFactory.create(AppModule, {
			logger: new MyLogger()
		})

		const connection = getConnection('default')
		const { isConnected } = connection
		connection.runMigrations();
		isConnected
			? Logger.log(`🌨️  Database connected`, 'TypeORM', false)
			: Logger.error(`❌  Database connect error`, '', 'TypeORM', false)

		app.getHttpAdapter()

		app.use(helmet())
		app.enableShutdownHooks()
		app.enableCors({
      origin: 'http://localhost:3000',
    })

		await app.listen(PORT)

		if (module.hot) {
			module.hot.accept()
			module.hot.dispose(() => app.close())
		}

		Logger.log(
					`⚡  Application is running on: ${await app.getUrl()}`,
					'Post CMS',
					false
			  )
	} catch (error) {
		Logger.error(`❌  Error starting server, ${error}`, '', 'Bootstrap', false)
		process.exit()
	}
}
bootstrap().catch(e => {
	Logger.error(`❌  Error starting server, ${e}`, '', 'Bootstrap', false)
	throw e
})