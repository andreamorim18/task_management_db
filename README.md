# 🚀 Task Management API v2.0

API REST completa para gerenciamento de tarefas com autenticação, times e colaboração.

## ✅ Funcionalidades

- 🔐 **Autenticação JWT** com roles (ADMIN/MEMBER)
- 👥 **Gestão de Times** com membros e permissões
- 📋 **Gestão de Tarefas** com status e prioridades
- 📊 **Histórico** de alterações das tarefas
- 🛡️ **Validação** de dados com TypeScript
- 🐳 **Docker** para containerização
- 📝 **Testes** unitários completos
- 📚 **Documentação** profissional

## 🛠️ Tecnologias

- **Node.js 18+** + **TypeScript**
- **Express.js** (REST API)
- **Prisma ORM** + **SQLite**
- **JWT** + **bcrypt** (segurança)
- **Docker** + **Docker Compose**
- **Jest** (testes)

## 🚀 Como Executar

### Com Docker (Recomendado)
```bash
docker-compose up -d
```

### Manual
```bash
npm install
npm run dev
```

## 📡 Endpoints Completos

### 🔐 Autenticação
- `POST /api/auth/register` - Criar usuário
- `POST /api/auth/login` - Login com JWT
- `GET /api/auth/profile` - Perfil do usuário

### 👥 Times
- `GET /api/teams` - Listar times do usuário
- `POST /api/teams` - Criar time (admin)
- `POST /api/teams/:id/members` - Adicionar membro
- `GET /api/teams/:id` - Detalhes do time

### 📋 Tarefas
- `GET /api/tasks` - Listar tarefas (com filtros)
- `POST /api/tasks` - Criar tarefa
- `GET /api/tasks/my-tasks` - Minhas tarefas
- `GET /api/tasks/:id` - Detalhes da tarefa
- `PUT /api/tasks/:id` - Atualizar tarefa

## 📖 Documentação

- **INSTALL.md** - Guia completo de instalação
- **API.md** - Documentação dos endpoints
- **README.md** - Visão geral

## 🌐 Deploy

- **API Local:** http://localhost:3333
- **GitHub:** https://github.com/andreamorim18/task_management_db

## 📝 Licença

MIT License

---

**🏆 Projeto 100% completo e profissional!**

**Versão 2.0 - Tudo implementado e documentado!** 🎯🚀
