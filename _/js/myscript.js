(function() {
    //Selecting node
    var myNode = document.querySelector('#artlist .pixgrid ul');

    myNode.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG') {
            var myOverlay = document.createElement('div');
            myOverlay.id = 'overlay';
            document.body.appendChild(myOverlay);

            //Set overly styles
            myOverlay.style.position = 'absolute';
            myOverlay.style.top = 0;
            myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
            myOverlay.style.cursor = 'pointer';

            //Resize and position overlay
            myOverlay.style.width = window.innerWidth + 'px';
            myOverlay.style.height = window.innerHeight + 'px';


        } //Target is an image

    }, false); // Image clicking

})(); //Self executing function