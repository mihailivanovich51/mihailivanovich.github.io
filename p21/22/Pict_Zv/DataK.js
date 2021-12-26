 let PorT=0;  let opc=1; blr=3; fl=1;     let dBG/*=0*/;
  let Ncol=['red','green','yellow','blue','Lime','BlueViolet','Crimson','Fuchsia'];
  let rnd=[];
  let Nzv=7; let kpv=document.body.clientWidth/100;   let ib, iZv, rect;

  let VS;  let kZ=0.0;  kw0=1; kwN=1;   flH=0; //for Billiard

let wris=[];  let xris=[];  let yris=[]; let dg = []; let op=[]; let xv=[];  let yv =[];

 let act1=false; let flmouse=false; pic=0; let k=0; 
 let Nst = 300;  let tint=30;  pim=Math.PI;
 let sin1=[];   let cos1=[]; let lxy=[]; 
  
 let BG=[]; 
 function dataBG(kd){ let s="Pict_BG/HC_0";  let s1="Pict_BG/bg0";
 for (i=0; i<8; i++){j=i+1; if (kd==j) BG[i]=s+j+'d.jpg'; else BG[i]=s+j+'.jpg';  BG[i+10]=s1+j+'.jpg'}}
 dataBG()

var checkBG = document.getElementsByName('radio');
var checkRad = document.getElementsByName('rd');
var checkZ51 = document.getElementsByName('rad');

 let name0=['Barboss','Prof. Dumbl','Snagles','Sirano','Mog_Lapy','Murr','Ralpha']; 
 let name1=['Paddy','Speedey','CUBA','MISHA','Mila','mr Magoo','Kesha'];
 let name0c=['Barboss','Prof. Dumbl','Snugles','Sirano','Mog_Lapy','Murr','Ralpha'];  
 let name1c=['Paddy','Valdek','CUBA','Misha W','mr Magoo','Fox','Kesha'];
 let nameZv=[]; nameZv[0]=[name0,name1]; nameZv[1]=[name0c,name1c];   let name=nameZv[0][0];

   /* picZv[0]=[zv51,zvW]; picZv[1]=[zv51c,zvWc];*/ 
 let picZv=[]; picZv[0]=[]; picZv[1]=[]; picZv[0][0]=[]; picZv[0][1]=[];  picZv[1][0]=[]; picZv[1][1]=[]; 
 function dataZv(){ let s="Pict_Zv/";  let s1=".jpg"; let s2=".png"; 
 for (i=0; i<7; i++){picZv[0][0][i]=s+i+s2; picZv[1][0][i]=s+(i+10)+s2; 
                     picZv[0][1][i]=s+i+s1; picZv[1][1][i]=s+(i+10)+s1; }}
     dataZv();   

                        //Бильярд
   ts=0; dt=0.001; krat=20;  Cs=800; let rv=0; db=0.06;   kom=1; let T; 
   let xs0=[]; let ys0=[];  let vxs0=[];  let vys0=[]; Fx=[]; Fy=[];   let ays=[0,0,0,0,0,0,0]; let omeg=[0,0,0,0,0,0,0];
   let xs=[]; let ys=[]; let vxs=[]; let vys=[];  let Rs=[]; fis=[0,0,0,0,0,0,0];
    for (j=0; j<7; j++){vxs[j]=0; vys[j]=0;} //for Billiard
  var Img0=[im0,im1,im2,im3,im4,im5,im6]; var Imga=[0,1,2,3,4,5,6];  var imt0=Imga;

   //for Save Open    
   let iv=0;   let Name;   let Data={};   let obj={};     


     //different ImageZv   
 function Rct(){rect=0; if (iZv==1) NewIm(); else OldIm();
          if(PorT==0) PicSH(); else  SetPic()}  

 function Circle(){rect=1; if (iZv==1) NewIm(); else OldIm();  
          if(PorT==0) PicSH(); else  SetPic()}  
 
function NewIm(){iZv=1; for (i = 0; i < 7; i++) Img0[i].src=picZv[iZv][rect][i];        
      name=nameZv[rect][iZv]; SetName();} 
 
function OldIm(){iZv=0; for (i = 0; i < 7; i++) Img0[i].src=picZv[iZv][rect][i];         
      name=nameZv[rect][iZv]; SetName();} 

function SetOpc(){imbg.style.opacity = opc;} 
function SetBlr(){ VarBG(); imbg.style='-webkit-filter: blur('+ +blr+'px); opacity:'+opc+';';}

function SetName(){
var put = document.getElementsByName('tn0');
for (i = 0; i < 7; i++){ put[i].value=name[i];}}

function VarBG(){imbg.src = BG[+ib+dBG]; SetImage()} //BackGround
function New1(){
 imt0=[]; Nzv=0;  var check = document.getElementsByName('spice');
for (i = 0; i < 7; i++){
if (check[i].checked) Nzv = imt0.push(i);  else Img0[i].style='width: 0vw;';  } 
if(PorT==0) PicSH(); else   SetPicSt(0);}

function SetTab(){t00.value=t0[pic];  t01.value=t1[pic]; t02.value=t2[pic];  t03.value=t3[pic]; 
 t04.value=t4[pic]; t05.value=t5[pic]; tz0.value=tz[pic]; 
 d00.value=rxy[0][pic];  d01.value=rxy[1][pic]; d02.value=rxy[2][pic]; 
 tname.value=name[pic]; nst.value=Nst;} 

function Run(){ let tim = setInterval(function() {
   if (!act) {clearInterval(tim); btn0.value='Theater'} else {btn0.value='STOP'; OneStep()}},tint); }//Run Teatr

function sincos(){ 
  for (j = 0; j < Nzv; j++) { i = imt0[j]; lxy[i]=[]; sin1[i]=[]; cos1[i]=[];
lxy[i][0]=Math.sqrt((yff[1][i]-yff[0][i])*(yff[1][i]-yff[0][i])+
                    (xff[1][i]-xff[0][i])*(xff[1][i]-xff[0][i])); 
if(lxy[i][0]==0){sin1[i][0]=0; cos1[i][0]=0;} else
{sin1[i][0]=((yff[1][i]-yff[0][i])/lxy[i][0]); cos1[i][0]=((xff[1][i]-xff[0][i])/lxy[i][0]);}

lxy[i][1]=Math.sqrt((yff[2][i]-yff[1][i])*(yff[2][i]-yff[1][i])+
                    (xff[2][i]-xff[1][i])*(xff[2][i]-xff[1][i])); 
if(lxy[i][1]==0){sin1[i][1]=0; cos1[i][1]=0;} else
{sin1[i][1]=((yff[2][i]-yff[1][i])/lxy[i][1]); cos1[i][1]=((xff[2][i]-xff[1][i])/lxy[i][1]);}

lxy[i][2]=Math.sqrt((yff[0][i]-yff[2][i])*(yff[0][i]-yff[2][i])+
                    (xff[0][i]-xff[2][i])*(xff[0][i]-xff[2][i])); 
if(lxy[i][2]==0){sin1[i][2]=0; cos1[i][2]=0;} else
{sin1[i][2]=((yff[0][i]-yff[2][i])/lxy[i][2]); cos1[i][2]=((xff[0][i]-xff[2][i])/lxy[i][2]);}
}}

                     /*Save & Open*/  
   
function OpenJS(){ obj={};
  if (iv==0) {obj=V0} else  
  if (iv==1) {obj=V1} else  
  if (iv==2) {obj=V2} else {obj=V3};
ObjToIsh()}
function NewChek(){ var check = document.getElementsByName('spice');
for (i = 0; i < 7; i++){check[i].checked=false}
for (i = 0; i<imt0.length; i++){check[imt0[i]].checked=true}
Nzv=imt0.length-1; }

function ObjToIsh(){ 
PorT=obj.PorT; dBG=obj.dBG; Nzv=obj.Nzv; tint=obj.tint; blr=obj.blr;
iZv=obj.iZv; checkZ51[iZv].checked=true; 
rect=obj.rect; checkRad[rect].checked=true;
ib=obj.ib; checkBG[ib].checked=true;
if (dBG==10) vbg.checked=true; else vbg.checked=false;
 if (PorT==1){Nst=obj.Nst; xff=obj.xff; yff=obj.yff; wff=obj.wff; rxy=obj.rxy; dff=obj.dff; off=obj.off;
 t0=obj.t0; t1=obj.t1; t2=obj.t2; t3=obj.t3; t4=obj.t4; t5=obj.t5; tz=obj.tz; 
VarBG(); SetBlr(); imt0=obj.imt0;    NewChek(); New1();
if (iZv==0) OldIm(); else NewIm(); sincos();   SetPicSt(0); SetBlr()}       else
{dt=obj.dt; Cs=obj.Cs; rv=obj.rv; krat=obj.krat; omeg=obj.omeg; 
for (i = 0; i < 7; i++){
  wris[i]=obj.wris0[i]; xs[i]=obj.xs0[i];ys[i]=obj.ys0[i];vxs[i]=obj.vxs0[i];vys[i]=obj.vys0[i];}
 VarBG(); SetBlr(); imt0=obj.imt0;    NewChek(); New1();
 if (iZv==0) OldIm(); else NewIm(); PicSH(); SetBlr()}
} 

function SetImage(){
imbg.onload = function() {
   w0=this.width; h0=this.height;  Lx=Ly*w0/h0; 
   imbg.style.width=Lx+'vw';
   c1.style.left=Lx+0.5+'vw'; c2.style.left=Lx+12+'vw'; 
}}