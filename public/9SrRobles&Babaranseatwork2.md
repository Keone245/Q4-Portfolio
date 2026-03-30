# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

- When you don't change anything, header, sidebar, main content and footer are all aligned together. If you add the relative position and input top and left, it will move to the bottom and right respectively. If you were to input right and bottom, it will go left and up respectively. If there is no more space then some parts will go out of the window or overlap with the other contents of the site.
### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

- When you scroll through the page, the footer doesn't move at all. the footer behaves differently because you used fixed instead of relative positioning. When you use fixed, no matter what you do like scrolling, the position of the footer won't change at all. This is because fixed positioning is relative to the viewpoint. Relative positioning still follows the normal flow and you can change the position relative to it's normal position.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

 - When you use absolute, it is relative to the nearest positioned ancestor and isn't counted in the normal flow anymore. You can essentially place it anywhere as long as you set the values right. The main difference between absolute and fixed positioning is that fixed positioning no matter what you do like scroll, it will stay in the same place. absolute positioning on the other hand moves along the page as you scroll down. 
### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

- The notice appears on top of the content because the z-index is higher on the notice than the content. If you make it so that the content has a higher z-index value than the notice, the content will be infront instead of the notice.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).

    -
        .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
      position: absolute; top: 66px; left: 200px;
      z-index: 0;
    }    
    .notice {
    position: absolute;
    top:66px;
    left: 430px;
    background: orange;
    padding: 10px;
    z-index: 1;
}
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
     - When you change absolute to relative, the thing stays as the same as the main reason these 2 differ is because of the page scrolling. When you change absolute to relative, the content box goes below the Notice box. This is because relative follows the normal flow and it initially started below the sidebar. This is why there is a massive difference between the 2.
    * What do you observe on about the effect of z-index on .notice and .content boxes?
    - Whoever has the higher z-index will take priority in the display. So if content has the higher z-index then it will overlap notice and vice versa if notice has the higher z-index.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
    - Static follows the normal flow and inputting values like top and left would be no effect. Relative positioning also follows the normal flow but you can move it's position by using the top, left, right, and, bottom. Absolute doesn't follow the normal flow  and the position is based by the relative to it's nearest positioned ancestor. Fixed doesn't follow the normal flow and is relative to it's viewport. It won't move if you scroll unlike Absolute.

    b. How does absolute positioning depend on its parent element?
    - Normally, an absolute positioning is relative to the nearest positioned ancestor but if there isn't a positioned ancestor then it is relative to the initial containing block.

    c. How do you differentiate sticky from fixed (you can research on sticky)?
    - If you use fixed positioning, no matter what you do like scrolling, it will not move from it's position but for sticky, it's like fixed but also acts like a relative positioning as it will be relative for some time until you reach the scroll threshold then it will function as a fixed positioning for the rest of the time until you go back behind the scroll threshold.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
    - I would use sticky positioning to keep the important things I would like for them to see. Like You can use sticky to make them see important rules and keywords you would like for them to see throughout the website. You can also use Fixed position to place the images properly and they won't move which is evident in a lot of websites. 


    This is a pair activity done by
    Sr02, Babaran, David Emmanuel and
    Sr19, Robles, Keone Daniel 