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
            myOverlay.style.top = window.pageYOffset + 'px';
            myOverlay.style.left = window.pageXOffset + 'px';

            //Create image element
            var imageSrc = e.target.src;
            var largeImage = document.createElement('img');
            largeImage.src = imageSrc.substr(0, imageSrc.length -7) + '.jpg';
            largeImage.style.display = 'block';
            largeImage.style.position = 'absolute';


            //Wait until the image has loaded
            largeImage.addEventListener('load', function() {

                //Resize if taller
                if (this.height > window.innerHeight) {
                    this.ratio = window.innerHeight / this.height;
                    this.height = this.height * this.ratio;
                    this.width = this.width * this.ratio;
                }

                //Resize if wider
                if (this.width > window.innerWidth) {
                    this.ratio = window.innerWidth / this.width;
                    this.height = this.width * this.ratio;
                    this.width = this.width * this.ratio;
                }

                cenerImage(this);
                myOverlay.appendChild(largeImage);

            }); //Image has loaded

            largeImage.addEventListener('click', function(){
                if (myOverlay) {
                    myOverlay.parentNode.removeChild(myOverlay);
                }
            }, false);

            window.addEventListener('scroll', function() {
                if (myOverlay) {
                    myOverlay.style.top = window.pageYOffset + 'px';
                    myOverlay.style.left = window.pageXOffset + 'px';
                }
            }, false)
        } //Target is an image

    }, false); // Image clicking

    function cenerImage(theImage) {
        var myDifX = (window.innerWidth - theImage.width)/2;
        var myDifY = (window.innerHeight - theImage.height)/2;

        theImage.style.top = myDifY + 'px';
        theImage.style.left = myDifX + 'px';

        return theImage;
    }
})(); //Self executing function