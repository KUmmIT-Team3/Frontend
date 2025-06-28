# 개발 환경
FROM node:22

WORKDIR /app

# 의존성 설치
COPY package*.json ./
RUN npm ci

# 소스 코드 복사
COPY . .

# 개발 서버 실행 (포트 5173 사용)
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]