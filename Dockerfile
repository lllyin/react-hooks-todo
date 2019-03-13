# Dockerfile
# 使用node做为镜像
FROM node:8.12.0
# 在容器中创建该目录
RUN mkdir -p /home/react-hooks-todo
COPY . /home/react-hooks-todo
# 设置容器的工作目录为该目录
WORKDIR /home/react-hooks-todo
# 向外提供3000端口
EXPOSE 3000

# 容器创建完成后执行的命令
CMD npm install yarn@latest -g && yarn install --registry=https://registry.npm.taobao.org && yarn run build
