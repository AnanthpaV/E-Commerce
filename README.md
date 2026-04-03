# E-Commerce Application

A full-stack e-commerce application built with Spring Boot (backend) and React/TypeScript (frontend).

## Project Structure

```
E-Commerce/
├── backend/           # Spring Boot REST API
│   ├── src/
│   ├── pom.xml
│   └── mvnw
├── frontend/          # React + TypeScript + Vite
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## Tech Stack

### Backend
- **Framework**: Spring Boot
- **Language**: Java
- **Build Tool**: Maven
- **Database**: (Configure in application.properties)
- **Security**: Spring Security with JWT/CORS support

### Frontend
- **Framework**: React 18+
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS
- **Package Manager**: npm

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The backend will start on `http://localhost:8080` (or the port configured in `application.properties`).

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

The frontend will start on `http://localhost:5173` (default Vite port).

## Features

### Authentication
- User login/registration
- JWT-based authentication
- CORS configured for secure cross-origin requests

### Products
- Browse products
- Filter and search functionality
- Product details view
- Admin product management

### Cart & Checkout
- Add/remove items from cart
- Cart management
- Checkout process

### User Features
- User authentication
- Order history
- Wishlist functionality
- Theme customization

### Admin Features
- Admin dashboard
- Product management
- Order management

## API Endpoints

Key backend endpoints (configure CORS as needed):
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product details
- `POST /api/orders` - Create order
- And more...

## Configuration

### Backend
Edit `backend/src/main/resources/application.properties` to configure:
- Server port
- Database connection
- CORS settings
- JWT secret key

### Frontend
API endpoints are configured in `frontend/src/services/api.ts`.

## Development

### Prerequisites
- JDK 11+ (for backend)
- Node.js 16+ (for frontend)
- Maven (for backend)
- npm/yarn (for frontend)

### Running Both Services Simultaneously

**Terminal 1 - Backend:**
```bash
cd backend
mvn spring-boot:run
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## Build for Production

### Backend
```bash
cd backend
mvn clean package
```

The JAR file will be in `target/backend-0.0.1-SNAPSHOT.jar`

### Frontend
```bash
cd frontend
npm run build
```

The build output will be in `dist/` directory.

## Testing

### Backend
```bash
cd backend
mvn test
```

### Frontend
```bash
cd frontend
npm run test
```

## Deployment

- Backend can be deployed to any Java application server
- Frontend can be deployed to any static hosting service (Nginx, Apache, Vercel, Netlify, etc.)

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Push to GitHub
5. Create a pull request

## License

See LICENSE file in the repository.

## Contact

For questions or issues, please open an issue on GitHub.
