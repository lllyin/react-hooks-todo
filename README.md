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

1. 这句命令的意思是：在后台运行一个基于jenkinsci/blueocean镜像的容器, 容器的名字叫做 jenkins_node ,把容器的8080端口映射为8080端口，并且把服务器上的/Users/ling/jenkins_node目录挂在到docker容器上的/var/jenkins_home目录.

    注意 `/Users/ling/jenkins_node`是我Mac的home目录下的jenkins_node文件夹，ling是我的用户名。此处修改为自己的目录。

2. -d 后台运行docker容器

    用此终端，如果终端关闭，则容器也相应关闭，jenkins就无法访问了。加上-d,容器会在后台运行。

3. --name 为容器起个别名

    如果不起别名，则系统会默认分配一个随机别名，类似gklasd_sdfwe。起了别名后，后续会通过该别名管理该docker容器，也就是管理jenkins。

4. -p docker容器端口映射

    jenkins服务是运行在docker里的，docker默认不对外暴露端口的

5. -v 文件挂载

    如果不挂载，则jenkins所有log、用户配置文件都会在docker容器内，如果容器销毁，则jenkins得重新配置一遍。挂载出来方便jenkins迁移以及管理

查看你宿主机上的的/Users/ling/jenkins_node文件夹,当出现下图所有文件时，则说明jenkins启动成功，否则再等等...30秒左右即可