import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {Character} from '../Shared/Models/character';
import {CharacterService} from '../Services/character.service';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {CharacterListItemComponent} from '../character-list-item/character-list-item.component';
import {Router, RouterLink} from '@angular/router';
import {HoverHighlightDirective} from '../directives/hover-highlight.directive';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginator} from '@angular/material/paginator';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {GenderColourPipe} from '../pipes/gender-colour.pipe';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {MatSort, Sort} from '@angular/material/sort';
import {MatSortHeader} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-character-list',
  imports: [
    NgIf,
    RouterLink,
    HoverHighlightDirective,
    MatCardModule,
    MatButtonModule,
    MatPaginator,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatIcon,
    MatTooltip,
    MatSort,
    MatSortHeader
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {
  characterList: Character[] = [];
  displayedColumns: string[] = ['id', 'name', 'gender', 'type', 'riderStatus', 'image', 'buttons'];
  dataSource: MatTableDataSource<Character> = new MatTableDataSource(this.characterList);
  error: string | null = null; // variable for error message
  private _liveAnnouncer = inject(LiveAnnouncer);

  // reference to the paginator
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;
  constructor(private characterService: CharacterService, private router: Router) {

  }

  ngOnInit() {
    this.characterService.getCharacters().subscribe({
        next: (data: Character[]) => {
          this.characterList = data;
          this.dataSource.data = data; // assign data to dataSource
          this.dataSource.paginator = this.paginator; // link paginator to data source
        },
        error: err => {
          this.error = "Error fetching Characters"; // error message
          console.error("Error fetching Characters", err);
        },
        complete: () => console.log("Character data fetch complete!")
      }
    )


    // CRUD tests for bonus mark
  } // end ngOnInit

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  sendToEdit(id:number): void {
    event?.stopPropagation();
    this.router.navigate(['/modify-character', id]);
  }

  onDelete(id:number): void {
    this.characterService.deleteCharacter(id).subscribe(() => this.router.navigate(['/characters']));

    // retrieve the characters again to update changes
    this.characterService.getCharacters().subscribe({
      next: (data: Character[]) => {
        this.characterList = data;
        this.dataSource.data = data; // assign data to dataSource
        this.dataSource.paginator = this.paginator; // link paginator to data source
      },
      error: err => {
        this.error = "Error fetching Characters"; // error message
        console.error("Error fetching Characters", err);
      },
      complete: () => console.log("Character data fetch complete!")
      }
    )
  }


} // end class
