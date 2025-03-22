import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;
  console.log(`Application is running on port: ${port}`); // Log para verificar a porta

  await app.listen(port);
}

bootstrap();
