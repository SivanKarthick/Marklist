var d= document, ts = this, fgen = [], ftota=[], fmath = [], feng =[], ftam =[], mgen = [], mtota=[], mmath = [], meng =[], mtam =[], gen = [], tota=[], math = [], eng =[], tam =[];
function createMarklist() {
	console.log(res);
	for(i=0;i<res.length;i++) {
		ts.tr = d.createElement("tr");
		ts.tr.className = "row"+(i+1);
		CreateElement(i,res[i].name);
		CreateElement(i,res[i].gender);
		tot = 0;
		for(j=0;j<res[i].marks.length;j++) {
			tot += res[i].marks[j].mark;
			CreateElement(i,res[i].marks[j].mark);
		}
		CreateElement(i,tot);
		//alert(tot);
		$(".mytable").append(tr);
	}
}

function CreateElement(x,value) {
	td1 = d.createElement("td");
	td1.innerHTML = value;
	ts.tr.append(td1);
	if(value == "f") {
		ts.tr.className="FClass"
	}
	if(value == "m") {
		ts.tr.className="MClass"
	}	
	
	return td1;
}

function filterFunction() {
	var applyFilter = new ApplyFilter();
	applyFilter.filtering();
}


function ApplyFilter() {
	scoreval = $("#score").val();
	subval = $("#subject").val();
	genderval = $("#gender").val();
	
	if(scoreval == "" || subval =="" || genderval == "") {
		alert("Please Select all the values..");
		return false;
	} else {
	
	$("td .mytable tr[class*='Class']").hide();
	$("td .mytable tr[class*='Class']").each(function() {
		//debugger;
		var MClass = [], FClass = [], AClass = [];
		totvallength = $("td .mytable tr[class*='Class']").length;
		if($(this).hasClass("MClass")) { 
			for(i=totvallength;i>totvallength-(totvallength-1);i--) {
				MClass[i] = $(this).find("td:nth-child("+i+")").text();
				//console.log(MClass[i]);
			}
			mtota.push(MClass[6]);
			mgen.push(MClass[2]);
			mtam.push(MClass[3]);
			mmath.push(MClass[5]);
			meng.push(MClass[4]);
		}

		
		if($(this).hasClass("FClass")) { 
			for(i=totvallength;i>totvallength-(totvallength-1);i--) {
				FClass[i] = $(this).find("td:nth-child("+i+")").text();
				//console.log(FClass[i]);
			}
			ftota.push(FClass[6]);
			fpush(FClass[2]);
			ftam.push(FClass[3]);
			fmath.push(FClass[5]);
			feng.push(FClass[4]);
		}
		
		
		for(i=totvallength;i>totvallength-(totvallength-1);i--) {
				AClass[i] = $(this).find("td:nth-child("+i+")").text();
		}
		
		tota.push(AClass[6]);
		gen.push(AClass[2]);
		tam.push(AClass[3]);
		math.push(AClass[5]);
		eng.push(AClass[4]);
		
	});
	}
}


ApplyFilter.prototype.filtering = function() {
	if(scoreval == "Highest") {
		if(genderval == "M") {
			for(i=0;i<mgen.length;i++) {
				if(mgen[i] == "m") {
					tamval = Math.max(...mtam);
					engval = Math.max(...meng);
					mathval = Math.max(...mmath);
					if(subval=="Tamil") {
						for(j=0;j<mtam.length;j++) {
							if(tamval == mtam[j]) {
								$("td .mytable tr[class='MClass']:eq("+j+")").show();
							}
						}
					}
					if(subval=="English") {
						for(j=0;j<meng.length;j++) {
							if(engval == meng[j]) {
								$("td .mytable tr[class='MClass']:eq("+j+")").show();
							}
						}
					}
					if(subval=="Maths") {
						for(j=0;j<mmath.length;j++) {
							if(mathval == mmath[j]) {
								$("td .mytable tr[class='MClass']:eq("+j+")").show();
							}
						}
					}
				}
			}
		}
		if(genderval == "F") {
			for(i=0;i<fgen.length;i++) {
				if(fgen[i] == "f") {
					tamval = Math.max(...ftam);
					engval = Math.max(...feng);
					mathval = Math.max(...fmath);
					if(subval=="Tamil") {
						for(j=0;j<ftam.length;j++) {
							if(tamval == ftam[j]) {
								$("td .mytable tr[class='FClass']:eq("+j+")").show();
							}
						}
					}
					if(subval=="English") {
						for(j=0;j<feng.length;j++) {
							if(engval == feng[j]) {
								$("td .mytable tr[class='FClass']:eq("+j+")").show();
							}
						}
					}
					if(subval=="Maths") {
						for(j=0;j<fmath.length;j++) {
							if(mathval == fmath[j]) {
								$("td .mytable tr[class='FClass']:eq("+j+")").show();
							}
						}
					}
				}
			}
		}
		if(genderval=="A") {
			for(i=0;i<gen.length;i++) {
				if(gen[i] == "m") {
					tamval = Math.max(...tam);
					engval = Math.max(...eng);
					mathval = Math.max(...math);
					if(subval=="Tamil") {
						for(j=0;j<tam.length;j++) {
							if(tamval == tam[j]) {
								$("td .mytable tr[class*='Class']:eq("+j+")").show();
							}
						}
					}
					if(subval=="English") {
						for(j=0;j<eng.length;j++) {
							if(engval == eng[j]) {
								$("td .mytable tr[class*='Class']:eq("+j+")").show();
							}
						}
					}
					if(subval=="Maths") {
						for(j=0;j<math.length;j++) {
							if(mathval == math[j]) {
								$("td .mytable tr[class*='Class']:eq("+j+")").show();
							}
						}
					}
				}
			}
		}
	} else if(scoreval == "Lowest") {
		if(genderval == "M") {
			for(i=0;i<mgen.length;i++) {
				if(mgen[i] == "m") {
					tamval = Math.min(...mtam);
					engval = Math.min(...meng);
					mathval = Math.min(...mmath);
					if(subval=="Tamil") {
						for(j=0;j<mtam.length;j++) {
							if(tamval == mtam[j]) {
								$("td .mytable tr[class='MClass']:eq("+j+")").show();
							}
						}
					}
					if(subval=="English") {
						for(j=0;j<meng.length;j++) {
							if(engval == meng[j]) {
								$("td .mytable tr[class='MClass']:eq("+j+")").show();
							}
						}
					}
					if(subval=="Maths") {
						for(j=0;j<mmath.length;j++) {
							if(mathval == mmath[j]) {
								$("td .mytable tr[class='MClass']:eq("+j+")").show();
							}
						}
					}
				}
			}
		}
		if(genderval == "F") {
			for(i=0;i<fgen.length;i++) {
				if(fgen[i] == "f") {
					tamval = Math.min(...ftam);
					engval = Math.min(...feng);
					mathval = Math.min(...fmath);
					if(subval=="Tamil") {
						for(j=0;j<ftam.length;j++) {
							if(tamval == ftam[j]) {
								$("td .mytable tr[class='FClass']:eq("+j+")").show();
							}
						}
					}
					if(subval=="English") {
						for(j=0;j<feng.length;j++) {
							if(engval == feng[j]) {
								$("td .mytable tr[class='FClass']:eq("+j+")").show();
							}
						}
					}
					if(subval=="Maths") {
						for(j=0;j<fmath.length;j++) {
							if(mathval == fmath[j]) {
								$("td .mytable tr[class='FClass']:eq("+j+")").show();
							}
						}
					}
				}
			}
		}
		if(genderval=="A") {
			for(i=0;i<gen.length;i++) {
				if(gen[i] == "m") {
					tamval = Math.min(...tam);
					engval = Math.min(...eng);
					mathval = Math.min(...math);
					if(subval=="Tamil") {
						for(j=0;j<tam.length;j++) {
							if(tamval == tam[j]) {
								$("td .mytable tr[class*='Class']:eq("+j+")").show();
							}
						}
					}
					if(subval=="English") {
						for(j=0;j<eng.length;j++) {
							if(engval == eng[j]) {
								$("td .mytable tr[class*='Class']:eq("+j+")").show();
							}
						}
					}
					if(subval=="Maths") {
						for(j=0;j<math.length;j++) {
							if(mathval == math[j]) {
								$("td .mytable tr[class*='Class']:eq("+j+")").show();
							}
						}
					}
				}
			}
		}
		
	}

}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("ftTable");
  switching = true;

  dir = "asc"; 

  while (switching) {
    switching = false;
    rows = $("#ftTable tr[class*='Class']");
    for (i = 0; i < rows.length-1; i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {

      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}