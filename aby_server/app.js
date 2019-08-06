const express=require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');
const cors=require('cors');
const session=require('express-session');
var app=express();
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true
}));

app.use(session({
    secret:"��ȫ128λ�ַ���",//��ȫ�ַ���
    resave:true,//����ʱ��������
    saveUninitialized:true,//�����ʼ����
}));
app.use(express.static("public"));
app.listen(3000);
