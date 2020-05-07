// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// import document type schemas:
import mainClass from './mainClass';
import character from './character';
import gender from './gender';
import race from './race';

// import object type schemas:
import richText from './locale/richText';
import figure from './locale/figure';




// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //The following are document types which will appear in the studio:
    character,
    mainClass,
    gender,
    race,
    //custom object types added to this list can be used as { type: 'typename' } in other document schemas
    richText,
    figure,
  ]),
});
