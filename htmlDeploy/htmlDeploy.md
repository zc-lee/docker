### htmlDeploy

```
cd html
docker image build -t html ./
docker run -d -p 8000:80 html
```