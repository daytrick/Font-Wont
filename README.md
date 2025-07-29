# Font Wont
_View webpages in your wonted font (DP Sans Mono)._

**Why?**
<br>
I got sick of doing "inspect element" and changing body fonts to <span style="font-family: Comic Sans MS,cursive">Comic Sans MS</span>.

_**Why???**_
<br>
It's more readable than monotone fonts. (Serif fonts on a screen, my beloathed.)

**OK... how do I use it?**
1. Download the repo.
2. Open up Google Chrome and go to `chrome://extensions/`.
3. Click the "Load unpacked" button and select the directory to which you downloaded the repo.

**Wow, this font is pretty cool! What is it?**
<br>
It's [DP Sans Mono](https://www.pgdp.net/wiki/DP_Sans_Mono), a font developed by the Project Gutenberg Distributed Proofreaders. It's designed to make proofreading easier, so I thought it might make regular reading easier too. 
If you want to find out more, its GitHub is [here](https://github.com/DistributedProofreaders/dproofreaders/tree/master/styles/fonts).

<hr>

## TODO
_A list of things I'd like to implement/fix, when I have the time._

- Decide between using an online version of DP Sans Mono (linked to the GitHub, requires Internet connection and takes a while to load) or a local version (packaged with the extension, would be faster, but seems to require separate installation, and sometimes causes CORS errors?) --- using the online one for now
- Whitelist/blacklist specific websites
- Be able to select specific elements and mark them for font conversion
