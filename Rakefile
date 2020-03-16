task default: %w[serve]

task :serve do
    sh "bundle exec jekyll browsersync -s src"
end

task :build do
    sh "rm -rf _site/*"
    sh "JEKYLL_ENV=production bundle exec jekyll build -s src"
end
