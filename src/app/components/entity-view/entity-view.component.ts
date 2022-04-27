import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TABLE_VIEW_META_KEY } from 'src/app/decorators/table-view-mapping';
import { ViewControllerMapper } from 'src/app/decorators/view-controller-mapper';

@Component({
  selector: 'app-entity-view',
  templateUrl: './entity-view.component.html',
  styleUrls: ['./entity-view.component.css'],
})
export class EntityViewComponent implements OnInit {
  public entityService!: any;
  constructor(
    private route: ActivatedRoute,
    private injector: Injector // private p: PersonService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      const entityName = map.get('entity');
      if (entityName) {
        this.entityService = this.injector.get(
          ViewControllerMapper.getController(entityName)
        );
        const tableSpecs = Reflect.getMetadata(
          TABLE_VIEW_META_KEY,
          this.entityService
        );

        console.log(tableSpecs, this.entityService);

        const createAction = Reflect.getMetadata(
          'CreateAction',
          this.entityService
        );
        console.log(createAction);
      }
    });
  }
}
