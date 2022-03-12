function formDataVer()
{
	var t1=document.forms.form1.t1.value;
	var t2=document.forms.form1.t2.value;
	var s1=document.forms.form1.s1.value;
	var c1=document.forms.form1.c1;
	var r1=document.forms.form1.r1;
	var vc1=false;
	var vr1=false;
	var f=false;
	for (var i=0; i<c1.length; i++)
	{
		if(c1[i].checked==true)
		{
			vc1=true;
			break;
		}
	}
	for (var i=0; i<r1.length; i++)
	{
		if(r1[i].checked==true)
		{
			vr1=true;
			break;
		}
	}
	if(t1!='' && t2!='' && s1!='-' && c1==true && c2==true)
	{
		alert('ꃅꂦꋪꂦꌗꃅꂦ!');
		f=true;
	}
	else
	{
		alert('ОТВЕЧАЙ!');
		f=false;
	}
	return f;
}