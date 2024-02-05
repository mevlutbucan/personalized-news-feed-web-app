# Personalized News Feed Web App

*This workspace has been generated using [Nx, Smart Monorepos · Fast CI.](https://nx.dev)*

## Case

Task Description:

- [x] Design a user-friendly interface using React that allows the user to interact with the personalized news feed system.
- [x] Implement a user registration and authentication function using Node.js. Users should be able to create an account and log in to save their preferences and settings.
- [x] Allow users to search for articles by keywords and filter the results by date, category, and source.
- [x] Provide a function for users to customize their news feed by selecting their preferred sources, categories, and authors.
- [ ] Integrate at least two of the provided APIs (NewsAPI, OpenNews, NewsCred, The Guardian, New York Times, BBC News, NewsAPI.org) to access articles using Node.js. Note that some APIs may require registration and authentication keys.
  *(Only "The Guardian" API has been integrated.)*
- [x] Handle errors gracefully in your Node.js server, providing users with appropriate error messages when things go wrong.
- [x] Implement appropriate security measures to protect the system and user data, such as secure handling of user authentication information and data validation, in your Node.js server.

## ToolBox

### Client

- React + Vite
- Redux Toolkit
- React Router
- MUI Core & MUI X Date Pickers (with Moment)
- React Helmet
- React Hook Form
- Axios

### API

- Nest + Express + Webpack
- Prisma ORM
- Passport + JWT
- Bcrypt

### Shared Lib

- Yup

### Database

- MongoDB (with Docker)

## Local Development

```bash
git clone https://github.com/mevlutbucan/personalized-news-feed-web-app.git
```

### Requirements

- **Docker:** I am using Docker with WSL 2 based engine.
- **NodeJS:** I am using version 20.10.0.

### -> Install dependencies

I have used pnpm as package manager for installing dependencies.

```bash
pnpm install
```

### -> Run Mongo DB instance with Docker

Prisma needs to perform transactions, which requires your MongoDB server to be run as a replica set. So I created some scripts to do this. You need to run `start-docker-compose.sh` script inside `docker/` folder with a bash terminal.

```bash
cd ./docker
bash ./start-docker-compose.sh
```

### -> Generate Prisma Client and push schema to the database

```bash
pnpm exec prisma generate
pnpm exec prisma db push
```

### -> Run applications

```bash
pnpm run dev:all
```

## Build

The build artifacts will be stored in the `dist/` directory, ready to be deployed.

```bash
pnpm run build:all
```

## Explore the project graph

It will also show tasks that you can run with Nx.

```bash
pnpm run graph
```

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)
