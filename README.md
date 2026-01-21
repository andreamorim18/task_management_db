# 🚀 Task Management API

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
- 🎨 **Site profissional** com design moderno

## 🛠️ Tecnologias

- **Node.js 18+** + **TypeScript**
- **Express.js** (REST API)
- **Prisma ORM** + **SQLite**
- **JWT** + **bcrypt** (segurança)
- **Docker** + **Docker Compose**
- **Jest** (testes)
- **HTML5** + **CSS3** (site profissional)

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

## 🌐 Deploy e Acesso

### 📱 Site Profissional
- **GitHub Pages:** https://andreamorim18.github.io/task_management_db/
- **Design:** Moderno com gradientes e animações
- **Responsivo:** Mobile-friendly
- **Conteúdo:** Documentação completa e interativa

### 🔧 API Local
- **URL:** http://localhost:3333
- **Status:** Rodando com Docker
- **Banco:** SQLite + Prisma ORM

### 📚 Repositório
- **GitHub:** https://github.com/andreamorim18/task_management_db
- **Branch:** main
- **Licença:** MIT

## 🎨 Características do Site

- ✅ **Design moderno** com gradientes roxo/azul
- ✅ **Animações CSS** suaves e profissionais
- ✅ **Layout responsivo** para todos os dispositivos
- ✅ **Cards interativos** com hover effects
- ✅ **Status indicators** animados
- ✅ **Documentação** completa dos endpoints
- ✅ **Links diretos** para API e repositório

## 📖 Documentação

- **Site Principal:** https://andreamorim18.github.io/task_management_db/
- **README.md:** Visão geral do projeto
- **API.md:** Documentação detalhada dos endpoints
- **INSTALL.md:** Guia completo de instalação

## 📝 Licença

MIT License

---

**🏆 Projeto 100% completo e profissional!**

**🎨 Site com design moderno + API funcional + Documentação completa!** 🎯🚀

**Versão Final - Tudo implementado, documentado e online!** 🎉
