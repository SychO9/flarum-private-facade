{!! $forum['headerHtml'] !!}

<div id="app" class="
App App--privateFacade
@if(in_array($settings->get('sycho-private-facade.header_layout'), ['show_only_logo', 'hide_secondary_items'], true)) App--privateFacade--logoOnly @endif
@if($settings->get('sycho-private-facade.primary_color_bg')) App--privateFacade--primaryBg @endif">

    <div id="app-navigation" class="App-navigation"></div>

    <div id="drawer" class="App-drawer">

        <header id="header" class="App-header">
            <div id="header-navigation" class="Header-navigation"></div>
            <div class="container">
                <h1 class="Header-title">
                    <a href="{{ $forum['baseUrl'] }}" id="home-link">
                        @if ($forum['logoUrl'])
                            <img src="{{ $forum['logoUrl'] }}" alt="{{ $forum['title'] }}" class="Header-logo">
                        @else
                            {{ $forum['title'] }}
                        @endif
                    </a>
                </h1>
                <div id="header-primary" class="Header-primary"></div>
                <div id="header-secondary" class="Header-secondary"></div>
            </div>
        </header>

    </div>

    <main class="App-content">
        <div id="content"></div>

        {!! $content !!}

        <div class="App-composer">
            <div class="container">
                <div id="composer"></div>
            </div>
        </div>
    </main>

</div>

{!! $forum['footerHtml'] !!}
