KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('newbie-guide', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','gallery/newbie-guide/1.0/']});