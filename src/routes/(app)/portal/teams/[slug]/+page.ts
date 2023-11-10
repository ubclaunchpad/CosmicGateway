export function load({params}) {
    console.log('Slug Parameters:', params); 
    return {
        
        title: params.slug
    }
}