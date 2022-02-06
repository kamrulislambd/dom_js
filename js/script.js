const blogTitles = document.getElementsByTagName('h2');
for(const blogTitle of blogTitles){
    console.log(blogTitle.innerText);
}

let blogDetails = document.getElementsByTagName('p');
for(const blogDetail of blogDetails){
    console.log(blogDetail.innerText);
}