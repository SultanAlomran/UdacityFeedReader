/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$((function() {
    /* This is our first test suite - This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe("RSS Feeds", function() {
      it("should be defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /* loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */
      it("should ensure that url is defined and its not empty", function() {
        allFeeds.forEach(function(feed) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        });
      });

      /* loops through each feed
       * in the allFeeds object and ensures it has a name defined
       * and that the name is not empty.
       */
      it("should ensure that name is defined and its not empty", function() {
        allFeeds.forEach(function(feed) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
        });
      });
    });


 /* new test suite named "The menu" */
 describe('The menu', function() {
  /* test that ensures the menu element is
   * hidden by default.
   */
  
  it('should ensure that menu element is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
  });
      
   /* Test that ensures the menu changes
    * visibility when the menu icon is clicked. 
    */
   let menuIcon = 'menuIcon';
   it('should ensure that menu appaer or disappear when the icon is clicked', function() {
      $(menuIcon).trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
      $(menuIcon).trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
      
  });
 
 });
    /*new test suite named "Initial Entries" */
    describe("Initial Entries", function() {
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });
      it("shoud ensure there is at least one single element within feed container", function() {
        expect($(".feed .entry").length).not.toBeLessThan(1);
      });
    });
    // New test suite named "New Feed Selection"  */
    describe("New Feed Selection", function() {
      let firstFeed, secondFeed;
      beforeEach(function(done) {
        // get the first feed
        loadFeed(0, function() {
          firstFeed = $(".feed").html();
          // get the second feed
          loadFeed(1, function() {
            done();
          });
        });
      });
      it("should load new feed and check if it is different", function(done) {
        secondFeed = $(".feed").html();
        expect(secondFeed).not.toBe(firstFeed);
        done();
      });
    });
  })());
