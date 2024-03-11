additionalTask () {
    local array=("$@")
    local branch_name=$array
    git clone -b $branch_name --single-branch git@bitbucket.org:sunrisedigitalbusiness/sunrise-my-web-html-delivery.git src_style
    cp -R src_style/* public/
    echo "Copied all src_style to public floder ";
    rm -rf public/js 
    echo "removed the public/js"
    rm -rf public/modules 
    echo "removed the public/moduless"
    rm -rf public/templates 
    echo "removed the public/templates"
    rm -rf public/index.html
    echo "removed the public/index.html"
}