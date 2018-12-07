import { NgModule } from '@angular/core';
import { ItemComponent } from './item/item';
import { ExpandableComponent } from './expandable/expandable';
@NgModule({
	declarations: [ItemComponent,
    ExpandableComponent],
	imports: [],
	exports: [ItemComponent,
    ExpandableComponent]
})
export class ComponentsModule {}
