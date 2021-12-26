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
function SavOpenHelp(){if (flH==1) Help.style.display='none'; else Help.style.display='block'; flH=1-flH;} 

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

function SetTabXY(){vx.value=(vxs[pic]).toFixed(3); vy.value=(vys[pic]).toFixed(3);}

function New(){t0[pic] = +t00.value; t1[pic] = +t01.value; t2[pic] = +t02.value; t3[pic] = +t03.value; 
  t4[pic] = +t04.value; t5[pic] = +t05.value; tz[pic] = +tz0.value; 
  rxy[0][pic]=+d00.value; rxy[1][pic]=+d01.value; rxy[2][pic]=+d02.value; Nst=+nst.value; }

function Run(){ let tim = setInterval(function() {
   if (!act) {clearInterval(tim); btn0.value='Theater'} else {btn0.value='STOP'; OneStep()}},tint); }//Run Teatr

function Run1(){ let tim = setInterval(function() {
   if (!act1) {clearInterval(tim); btn1.value='Billiard'} else {btn1.value='STOP'; Bounce()}},tint); }//Run1 Billiard


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

function SaveJS(){SetDataFromIsh(); let SD=''; SD='V'+iv;
const obj_str = SD+'='+JSON.stringify(Data);
document.getElementsByTagName('a')[1].onclick = function() {
    this.href = 'data:application/txt;charset=utf-8,' + encodeURIComponent(obj_str);
    this.target = '_blank';
    this.download = SD+'.js';}}  

  
function SetDataFromIsh(){Data={};//Name=nameO.value; 
  if (PorT==1){ 
Data = {PorT,dBG,imt0,Nst,Nzv,iZv,ib,tint,rect,blr,xff,yff,wff,rxy,dff,off,t0,t1,t2,t3,t4,t5,tz}} else {
 wris0=[]; xs0=[]; ys0=[]; vxs0=[]; vys0=[]; wris0=wris; xs0=xs; ys0=ys; vxs0=vxs; vys0=vys;
Data = {PorT,dBG,imt0,Nzv,iZv,ib,tint,dt,Cs,rv,krat,rect,blr,xs0,ys0,vxs0,vys0,omeg,wris0}  //+Cs, rv, krat,fis? -kom
}}

function SaveTxt(){ Name=nameT.value; SetDataFromIsh();
const obj_str = JSON.stringify(Data);
document.getElementsByTagName('a')[0].onclick = function() {
//Save.onclick = function() {
    this.href = 'data:application/txt;charset=utf-8,' + encodeURIComponent(obj_str);
    this.target = '_blank';
    this.download = Name+'.txt';}}

function SaveSt(){Name=nameO.value; SetDataFromIsh();
const obj_str = JSON.stringify(Data)
window.localStorage.setItem(Name, obj_str)}

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

function loadFile(o){var fr = new FileReader(); fr.readAsText(o.files[0]);//}
  fr.onload = function(e){showDataFile(e) }                    
  function showDataFile(e){S = e.target.result; //получаем строку                    
obj = JSON.parse(S)  //преобразуем в массив
ObjToIsh()
}}
 
function OpenSt(){Name=nameO.value;
const str = window.localStorage.getItem(Name) //получаем строку
obj = JSON.parse(str)  //преобразуем в массив
ObjToIsh()}

                            /* From MOVE6n  Move Pict */
 for (i = 0; i < Nzv; i++) {Img0[i].onmousedown = function() {pic =  event.target.id.slice(2); 
   SetTab(); SetTabXY(); saveXY();}}

  document.onmouseup = clearXY;
  
  function saveXY() { kpv=document.body.clientWidth/100;    
      x = window.event.clientX/kpv;  y = window.event.clientY/kpv;      
    x_0 = Img0[pic].offsetLeft/kpv;   y_0 = Img0[pic].offsetTop/kpv;
    d_x = x_0 - x;     d_y = y_0 - y;
    document.onmousemove = movePict;
    document.addEventListener("onmousemove", movePict, false);}

  function clearXY() {document.onmousemove = null;}
  
  function movePict(obj_event) {
   x = window.event.clientX/kpv; y = window.event.clientY/kpv; 
    new_x = d_x + x;     new_y = d_y + y;
    xris[pic] = new_x;   yris[pic] = new_y; xs[pic] = new_x;   ys[pic] = new_y;
    Img0[pic].style.left = xris[pic]  + "vw";  Img0[pic].style.top = yris[pic]  + "vw"; }
          
           /*Drop or Ctrl+V BG */// let w0,h0;
function dodrop(event){
  var dt = event.dataTransfer;
  var files = dt.files;
  imbg.src = URL.createObjectURL(files[0]);
  SetImage();
}           
function SetImage(){
imbg.onload = function() {
   w0=this.width; h0=this.height;  Lx=Ly*w0/h0; 
   imbg.style.width=Lx+'vw';
   c1.style.left=Lx+0.5+'vw'; c2.style.left=Lx+12+'vw'; divSave.style.left=Lx+0.5+'vw';
}}           
function retrieveImageFromClipboardAsBlob(pasteEvent, callback){
  if(pasteEvent.clipboardData == false){if(typeof(callback) == "function"){
            callback(undefined);}};
    var items = pasteEvent.clipboardData.items;
    if(items == undefined){if(typeof(callback) == "function"){callback(undefined);}};
    for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") == -1) continue;
        var blob = items[i].getAsFile();
        if(typeof(callback) == "function"){callback(blob);}}}

window.addEventListener("paste", function(e){
    retrieveImageFromClipboardAsBlob(e, function(imageBlob){
        if(imageBlob){var URLObj = window.URL || window.webkitURL;
        imbg.src = URLObj.createObjectURL(imageBlob);
             SetImage();}});}, false);
        /*END  Ctrl+V BG */
