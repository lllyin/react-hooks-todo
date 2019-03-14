# react hooks todo demo

## usage

1. `git clone https://github.com/Andesome/react-hooks-todo.git`

2. `cd react-hooks-todo`

3. `yarn install` or `npm install`

4. `yarn start` or `npm start`

end


## docker自动部署篇
#### 1. 启动容器
```
sudo docker run \
    --rm \
    -d \
    -u 0 \
    --privileged \
    --name jenkins_node \
    -p 8080:8080 \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /home/jenkins_node:/var/jenkins_home \
    -v /usr/share/nginx/html:/usr/share/nginx/html \
    jenkinsci/blueocean
```

我的网站目录
`/usr/share/nginx/html/`

