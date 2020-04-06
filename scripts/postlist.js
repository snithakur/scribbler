function deletePost(){

    var id = document.getElementById('postId').value;
    var div = document.getElementById(id);
    div.remove();
    document.getElementById('deleteModal').style.display='none';
    document.getElementById('overlay').style.display='none';

}

function openDeleteModal(id){
    document.getElementById('deleteModal').style.display='block';
    document.getElementById('overlay').style.display='block';
    document.getElementById('postId').value=id;
}

function closeDeleteModal(){
    document.getElementById('deleteModal').style.display='none';
    document.getElementById('overlay').style.display='none';
}

