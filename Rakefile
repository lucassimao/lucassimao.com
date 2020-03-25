task default: %w[serve]

task :serve do
    sh "bundle exec jekyll browsersync -s src"
end

task :publish do
    sh 'rm -rf _site'
    sh 'git worktree add _site gh-pages'
    sh "JEKYLL_ENV=production bundle exec jekyll build -s src"
    sh 'cd _site && git add --all && git commit -m "Deploy updates" ; git push origin gh-pages'
    sh 'git worktree remove _site'
end
