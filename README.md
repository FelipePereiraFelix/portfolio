# Projeto Full-Stack + IA

Este projeto é um sistema Full-Stack que integra diversas tecnologias modernas para a construção de uma aplicação robusta e eficiente. Ele utiliza **NestJS** para o backend, **Prisma** como ORM, **PostgreSQL** como banco de dados, **Supabase** para armazenamento e autenticação, e **n8n** para automação de processos.

Atualmente, o projeto está focado na construção do backend, onde já foram criadas **migrations**, **APIs**, e a conexão com o Supabase e n8n.

---

## 🚀 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)** - Framework para construção do backend
- **[Prisma](https://www.prisma.io/)** - ORM para banco de dados
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[Supabase](https://supabase.com/)** - Backend-as-a-service (BaaS) que fornece banco de dados, autenticação e APIs
- **[n8n](https://n8n.io/)** - Plataforma de automação de workflows

---

## 🛠️ Como Configurar o Projeto

### 🔹 1. Instale as Dependências

Certifique-se de ter **Node.js** e **npm** instalados. Caso não tenha, baixe-os no [site oficial](https://nodejs.org/).

Depois, dentro da pasta do projeto, instale as dependências:

```bash
npm install
```

### 🔹 2. Configure o Banco de Dados (PostgreSQL)

Caso não tenha o PostgreSQL instalado, você pode baixá-lo [aqui](https://www.postgresql.org/download/).

Após instalar, crie um banco de dados para o projeto.

Se estiver usando Docker, pode rodar:

```bash
docker run --name meu-postgres -e POSTGRES_PASSWORD=minhasenha -p 5432:5432 -d postgres
```

Em seguida, crie um arquivo **.env** na raiz do projeto e adicione:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nomedobanco"
```

### 🔹 3. Aplicar as Migrations

Com o banco configurado, execute:

```bash
npx prisma migrate dev --name init
```

Isso criará as tabelas necessárias no banco.

### 🔹 4. Rodar a Aplicação

Para iniciar o projeto no modo desenvolvimento:

```bash
npm run start:dev
```

A API estará disponível no endereço padrão do NestJS:

```
http://localhost:3000
```

---

## 🌐 Configurando Serviços Externos

### 🔹 Supabase

O Supabase será usado para autenticação e banco de dados remoto. Para configurá-lo:

1. Crie uma conta gratuita no [Supabase](https://supabase.com/).
2. Crie um novo projeto e copie a **chave de API** e **URL do banco**.
3. Adicione essas informações ao seu arquivo `.env`:

```
SUPABASE_URL="sua_url"
SUPABASE_KEY="sua_chave"
```

### 🔹 n8n

O n8n é uma ferramenta para criar automações sem código. Para configurá-lo:

1. Crie uma conta gratuita no [n8n](https://n8n.io/).
2. Configure um workflow conectando com o Supabase para processar dados automaticamente.
3. Utilize a API do seu backend para enviar e receber dados entre o Supabase e o n8n.

Caso prefira rodar o n8n localmente, use Docker:

```bash
docker run -it --rm -p 5678:5678 n8nio/n8n
```

A interface estará disponível em:

```
http://localhost:5678
```

---

## 📌 Endpoints Disponíveis

### 🔹 Projetos
- **`GET`** http://localhost:3000/projetos → Retorna todos os projetos de forma resumida.
- **`GET`** http://localhost:3000/projetos/2 → Retorna todos os detalhes de um projeto específico.

### 🔹 Tecnologias
- **`GET`** http://localhost:3000/tecnologias → Lista as tecnologias do portfólio base.

---

### ❗Obs: Este é um projeto feito através de um curso da **Cod3r** que estou fazendo atualmente. E ainda não está finalizado, está parte é apenas o Back-end feito com APIs implementadas, e dados inputados no Supabase. 

