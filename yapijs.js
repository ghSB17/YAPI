$(document).ready(function(){

        // $.get('https://www.googleapis.com/youtube/v3/channels', {
        //     part:'contentDetails',
        //     forUserName:'goswim098',
        //     key:'AIzaSyCpZp25lr8vvjPkK0GrWL-P089Vqrjo3a0'
        //     }, function(data) {
        //         $.each(data.items, function(i, item){
        //             console.log(item);
        //         });

        //     }
        // )
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=goswim098&key=AIzaSyCpZp25lr8vvjPkK0GrWL-P089Vqrjo3a0',
            method: "GET"
        }).done(function(response) {
            console.log(response);
            console.log(response.items[0].contentDetails.relatedPlaylists.uploads);
            var plistID = response.items[0].contentDetails.relatedPlaylists.uploads;

        query2="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+plistID+
        "&maxResults=20&key=AIzaSyCpZp25lr8vvjPkK0GrWL-P089Vqrjo3a0";
        $.ajax({
            url: query2,
            method: "GET" 
        }).done(function(results){
            console.log(results);
            for( var i=0;i<results.items.length;i++){
                
                console.log(results.items[i].snippet.resourceId.videoId);
                var videoID=results.items[i].snippet.resourceId.videoId;
                var liItem=$("<li>");

                var html = "<iframe width='560' height='315' "+
                 "src='https://www.youtube.com/embed/"+videoID
                 + "' frameborder='0' allow='autoplay; encrypted-media' "
                 + "allowfullscreen></iframe>";
                liItem.html(html);
                $("#results").append(liItem);
                
            };

        });


    });
})