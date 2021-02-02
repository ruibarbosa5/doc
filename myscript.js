<script type="text/javascript">
function movenext()
{
x=xmldso.recordset
if (x.absoluteposition < x.recordcount)
	{
	x.movenext()
	}
}
function moveprevious()
{
x=xmldso.recordset
if (x.absoluteposition > 1)
	{
	x.moveprevious()
	}
}
</script>