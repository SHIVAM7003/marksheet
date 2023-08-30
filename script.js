function calculatePercentage() {
    let englishMarks = document.getElementById("english").value;
    let mathsMarks = document.getElementById("maths").value;
    let scienceMarks = document.getElementById("science").value;
    let socialStudiesMarks = document.getElementById("social-studies").value;
    let hindiMarks = document.getElementById("hindi").value;
  
    let totalMarks = englishMarks + mathsMarks + scienceMarks + socialStudiesMarks + hindiMarks;
  
    let englishPercentage = (englishMarks / 100) * 100;
    document.getElementById("english-percentage").innerHTML = englishPercentage + "%";
  
    let mathsPercentage = (mathsMarks / 100) * 100;
    document.getElementById("maths-percentage").innerHTML = mathsPercentage + "%";
  
    let sciencePercentage = (scienceMarks / 100) * 100;
    document.getElementById("science-percentage").innerHTML = sciencePercentage + "%";
  
    let socialStudiesPercentage = (socialStudiesMarks / 100) * 100;
    document.getElementById("social-studies-percentage").innerHTML = socialStudiesPercentage + "%";
  
    let hindiPercentage = (hindiMarks / 100) * 100;
    document.getElementById("hindi-percentage").innerHTML = hindiPercentage + "%";
  }

  
