- This is my-youtube clone projects by using the google youtube API
- My Youtube
-  Header
 - Sidebar
 - Search Input
 - User Logo
- Body
 - MainContainer
  - ButtonLits
   - Button
  - Video Container
   - Video Card
- Watch Page to Watch the Video



- Introducing Debouncing
 typing slow = 200ms time takes
 typing fast = 30ms time takes

 - Performance issue:
  - Search Iphone pro max = 14 letter * 1000 = 14000
  - with debouncing = 3 API calls * 1000 = 3000

  - Debouncing with 200ms
   - if difference between 2 key strokes is <200ms - Decline API call
   - 200ms make an API call