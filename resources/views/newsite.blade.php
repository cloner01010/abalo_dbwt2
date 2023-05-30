<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Neuer Einstieg</title>
    <script src="{{asset('storage/js/newsite.js')}}" defer></script>
    <link rel="stylesheet" href="{{asset('storage/css/newsite.css')}}">
</head>
<body>
<div id="app">
    @verbatim
        <siteheader></siteheader>
        <sitebody></sitebody>
        <sitefooter></sitefooter>
    @endverbatim
</div>
@vite('storage/app/public/js/newsite.js')
</body>
</html>

<script>
    import Sitefooter from "../../public/storage/vue/sitefooter";
    export default {
        components: {Sitefooter}
    }
</script>
