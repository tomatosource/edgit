yarn parcel build index.html
rm dist/edgit.*.js dist/edgit.*.js.map
git commit -am "build"
git push
git subtree push --prefix dist origin gh-pages
