/// Dependencies
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';

// Assets
import { LoginComponent } from '@auth/components/login/login.component';

export default function() {
	describe('*** Login Component:', () => {
		let _fixture: ComponentFixture<LoginComponent>;
		let _component: LoginComponent;

		beforeEach( async( () => {
			// Initial arrange
			_fixture   = TestBed.createComponent(LoginComponent);
			_component = _fixture.componentInstance;
		}));

		it('1). should create the login component', async( () => {
    // Action & Assert
				expect(_component).toBeTruthy();
  }));


	});
}
